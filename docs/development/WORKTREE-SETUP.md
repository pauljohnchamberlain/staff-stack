# Git Worktrees for Multi-Agent Development

## Overview

Git worktrees allow you to check out multiple branches simultaneously in different directories from the same repository. This is perfect for having multiple AI agents work on different features without interfering with each other.

## What are Git Worktrees?

Traditional Git workflow allows only one branch to be checked out at a time in a repository. Worktrees solve this limitation by creating additional working directories that share the same `.git` repository, enabling multiple branches to be active simultaneously.

## Benefits for Multi-Agent Development

1. **Isolated Development Environments**: Each agent works in completely separate directories
2. **No Merge Conflicts During Development**: Agents can't accidentally interfere with each other's work
3. **Simultaneous Development Servers**: Multiple Next.js dev servers can run on different ports
4. **Independent Dependencies**: Each worktree can have different `node_modules` if needed
5. **Easy Context Switching**: Switch between what each agent is working on instantly
6. **Parallel Testing**: Run tests in one worktree while developing in another

## Basic Worktree Commands

### Essential Commands
```bash
# Create a new worktree
git worktree add <path> <branch-name>

# Create worktree with new branch
git worktree add <path> -b <new-branch-name>

# List all worktrees
git worktree list

# List with verbose output
git worktree list --verbose

# Remove a worktree
git worktree remove <path>

# Remove worktree forcefully (if it has uncommitted changes)
git worktree remove --force <path>

# Clean up stale worktree references
git worktree prune
```

## Multi-Agent Setup for Staff Stack

### Recommended Directory Structure
```
/Users/paulchamberlain/Developer/Projects/
├── staff-stack/                    # Main worktree (main branch)
│   ├── src/
│   ├── docs/
│   └── package.json
├── staff-stack-frontend/           # Agent 1 - Frontend Features
│   ├── src/
│   └── package.json               
└── staff-stack-backend/            # Agent 2 - Backend/API Features
    ├── src/
    └── package.json
```

### Step-by-Step Setup

#### 1. Create Feature Branches
```bash
# Ensure you're on main and up to date
cd /Users/paulchamberlain/Developer/Projects/staff-stack
git checkout main
git pull origin main

# Create branch for frontend-focused agent
git checkout -b feature/agent-frontend-ui
git push -u origin feature/agent-frontend-ui

# Create branch for backend-focused agent
git checkout -b feature/agent-backend-api
git push -u origin feature/agent-backend-api

# Return to main
git checkout main
```

#### 2. Create Worktrees
```bash
# Create worktree for Frontend Agent
git worktree add ../staff-stack-frontend feature/agent-frontend-ui

# Create worktree for Backend Agent
git worktree add ../staff-stack-backend feature/agent-backend-api

# Verify worktrees were created
git worktree list
```

#### 3. Setup Each Worktree Environment

**Frontend Agent Worktree Setup:**
```bash
cd ../staff-stack-frontend
pnpm install

# Create custom dev script for port 3001
echo '{
  "scripts": {
    "dev": "next dev --turbopack -p 3001",
    "dev:debug": "next dev --turbopack -p 3001 --inspect"
  }
}' > package-dev.json

# Create environment file
echo 'NEXT_PUBLIC_API_URL=http://localhost:3002
PORT=3001
NEXT_PUBLIC_WORKTREE=frontend' > .env.local
```

**Backend Agent Worktree Setup:**
```bash
cd ../staff-stack-backend
pnpm install

# Create custom dev script for port 3002  
echo '{
  "scripts": {
    "dev": "next dev --turbopack -p 3002",
    "dev:debug": "next dev --turbopack -p 3002 --inspect=9230"
  }
}' > package-dev.json

# Create environment file
echo 'NEXT_PUBLIC_API_URL=http://localhost:3001
PORT=3002
NEXT_PUBLIC_WORKTREE=backend' > .env.local
```

## Agent Responsibilities & Workflow

### Recommended Agent Specialization

**Agent 1 - Frontend Specialist:**
- UI components and styling
- User experience improvements
- Page layouts and navigation
- Client-side functionality
- Responsive design
- **Branch**: `feature/agent-frontend-ui`
- **Port**: 3001

**Agent 2 - Backend Specialist:**
- API routes and endpoints
- Database integrations
- Server-side logic
- Authentication systems
- Data validation and processing
- **Branch**: `feature/agent-backend-api`
- **Port**: 3002

### Development Workflow

#### Daily Development
```bash
# Agent 1 - Frontend work
cd staff-stack-frontend
git pull origin feature/agent-frontend-ui
pnpm dev  # Runs on port 3001

# Agent 2 - Backend work  
cd staff-stack-backend
git pull origin feature/agent-backend-api
pnpm dev  # Runs on port 3002
```

#### Regular Sync with Main
```bash
# From each worktree, regularly sync with main
git fetch origin
git rebase origin/main

# Or merge if preferred
git merge origin/main
```

#### Cross-Agent Testing
```bash
# Test frontend changes against backend APIs
curl http://localhost:3002/api/contact

# Test backend changes with frontend UI
open http://localhost:3001/contact-us
```

## Port Management Strategy

### Development Servers
- **Main worktree**: Port 3000 (`next dev --turbopack`)
- **Frontend agent**: Port 3001 (`next dev --turbopack -p 3001`)
- **Backend agent**: Port 3002 (`next dev --turbopack -p 3002`)

### Debugging Ports
- **Main**: Default Node.js debug port (9229)
- **Frontend**: Debug port 9229 (if main not running)
- **Backend**: Debug port 9230 (`--inspect=9230`)

### Environment Variables
```bash
# Frontend Agent .env.local
NEXT_PUBLIC_API_URL=http://localhost:3002
PORT=3001
NEXT_PUBLIC_WORKTREE=frontend

# Backend Agent .env.local  
NEXT_PUBLIC_API_URL=http://localhost:3001
PORT=3002
NEXT_PUBLIC_WORKTREE=backend
```

## Branch Management

### Naming Conventions
```bash
feature/agent-frontend-<feature-name>
feature/agent-backend-<feature-name>
hotfix/agent-<frontend|backend>-<fix-name>
experiment/agent-<frontend|backend>-<experiment-name>
```

### Merge Strategy
```bash
# Create Pull Requests from feature branches
git push origin feature/agent-frontend-ui
# Open PR: feature/agent-frontend-ui -> main

git push origin feature/agent-backend-api  
# Open PR: feature/agent-backend-api -> main
```

### Integration Testing
```bash
# Before merging, test integration between agents
cd staff-stack  # Main worktree
git checkout main
git pull origin main

# Create integration branch
git checkout -b integration/frontend-backend-merge
git merge origin/feature/agent-frontend-ui
git merge origin/feature/agent-backend-api

# Test the integrated changes
pnpm dev
pnpm build
pnpm test  # If tests exist
```

## Advanced Worktree Management

### Useful Git Aliases
Add to your `.gitconfig`:
```bash
[alias]
  wt = worktree
  wtl = worktree list
  wta = worktree add  
  wtr = worktree remove
  wtp = worktree prune
  
  # Quick worktree creation with branch
  wtab = "!f() { git worktree add \"$1\" -b \"$2\"; }; f"
  
  # List worktrees with branches
  wtls = "!git worktree list | awk '{print $1 \" (\" $3 \")\" }'"
```

### Worktree Status Script
Create `check-worktrees.sh` in your project root:
```bash
#!/bin/bash
echo "=== Worktree Status ==="
git worktree list --verbose

echo -e "\n=== Branch Status ==="
for dir in staff-stack staff-stack-frontend staff-stack-backend; do
  if [ -d "../$dir" ]; then
    echo "--- $dir ---"
    cd "../$dir" || continue
    echo "Branch: $(git branch --show-current)"
    echo "Status: $(git status --porcelain | wc -l) changes"
    echo "Behind: $(git rev-list --count HEAD..@{upstream} 2>/dev/null || echo '0') commits"
    echo "Ahead: $(git rev-list --count @{upstream}..HEAD 2>/dev/null || echo '0') commits"
    echo
  fi
done
```

## Troubleshooting

### Common Issues and Solutions

#### 1. Port Already in Use
```bash
# Find what's using the port
lsof -ti:3001
kill -9 $(lsof -ti:3001)

# Or use different ports
next dev --turbopack -p 3003
```

#### 2. Node Modules Issues
```bash
# Each worktree needs its own installation
cd staff-stack-frontend
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### 3. Branch Checkout Conflicts
```bash
# Can't checkout same branch in multiple worktrees
git worktree list  # Check which branches are checked out
git worktree remove <path>  # Remove conflicting worktree
```

#### 4. Stale Worktree References
```bash
# Clean up references to deleted worktrees
git worktree prune
```

#### 5. Environment Variable Conflicts
```bash
# Ensure each worktree has its own .env.local
cp .env.local ../staff-stack-frontend/.env.local
# Edit ports and URLs as needed
```

### Performance Optimization

#### Shared Node Modules (Advanced)
```bash
# Link node_modules to save disk space (optional)
cd staff-stack-frontend
rm -rf node_modules
ln -s ../staff-stack/node_modules ./node_modules
```

#### Git Configuration per Worktree
```bash
# Set different configs per worktree if needed
cd staff-stack-frontend
git config user.name "Frontend Agent"
git config user.email "frontend-agent@staffstack.co"
```

## Cleanup Procedures

### Temporary Cleanup (Keep Branches)
```bash
# Remove worktrees but keep branches
git worktree remove ../staff-stack-frontend
git worktree remove ../staff-stack-backend
git worktree prune
```

### Complete Cleanup (Remove Everything)
```bash
# Remove worktrees
git worktree remove ../staff-stack-frontend
git worktree remove ../staff-stack-backend

# Delete local branches (after merging)
git branch -d feature/agent-frontend-ui
git branch -d feature/agent-backend-api

# Delete remote branches
git push origin --delete feature/agent-frontend-ui
git push origin --delete feature/agent-backend-api

# Clean up references
git worktree prune
```

## Best Practices

### 1. Regular Synchronization
- Sync with main branch daily
- Coordinate major changes between agents
- Use integration branches for testing combined changes

### 2. Clear Responsibilities
- Define clear boundaries between frontend and backend work
- Document which agent owns which components
- Communicate when crossing boundaries

### 3. Environment Management
- Keep environment files in sync where needed
- Use different ports for each worktree
- Test cross-agent integrations regularly

### 4. Branch Hygiene
- Use descriptive branch names
- Keep feature branches focused and small
- Delete merged branches promptly

### 5. Documentation
- Document agent responsibilities
- Keep this guide updated with project-specific changes
- Document any custom scripts or aliases

## Integration with Claude Code

When using Claude Code with worktrees:

1. **Start Claude Code from the appropriate worktree directory**
2. **Each agent should work from their dedicated worktree**
3. **Use the `CLAUDE.md` file to specify agent responsibilities**
4. **Coordinate through shared documentation in the main worktree**

This setup enables efficient parallel development with multiple AI agents while maintaining code quality and avoiding conflicts.