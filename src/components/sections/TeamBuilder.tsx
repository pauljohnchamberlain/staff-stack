'use client';

import { useState, useMemo, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid'; // For unique keys
import Link from 'next/link'; // Import Link
import { availableRoles, experienceLevels, getRoleCosts, calculateSavings, type RoleData, type ExperienceLevel, type RoleCost } from '@/lib/data/roles';
import { countries, workSetups, type CountryOption, type WorkSetupOption } from '@/lib/data/options';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogDescription } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input'; // Simple incrementer for now
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MinusCircle, PlusCircle, XCircle, Search, ChevronDown, ArrowUp, RefreshCw, Share2, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils'; // Import cn utility

interface TeamMember {
	id: string; // Unique identifier for each row/member
	roleId: string;
	staffCount: number;
	experienceLevel: ExperienceLevel;
}

// Team Builder Component
export default function TeamBuilder() {
	const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
		// Start with one default member
		{
			id: uuidv4(),
			roleId: availableRoles[0].id, // Default to the first role
			staffCount: 1,
			experienceLevel: 'Intermediate',
		},
	]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	// State for dropdowns
	const [selectedCountry, setSelectedCountry] = useState<CountryOption>(countries[0]); // Default to US
	const [selectedWorkSetup, setSelectedWorkSetup] = useState<WorkSetupOption>(workSetups[0]); // Default to Office

	// --- Currency Formatter --- (Using useCallback for stability)
	const formatCurrency = useCallback(
		(amount: number): string => {
			return new Intl.NumberFormat('en-US', {
				// Locale can be dynamic based on country later
				style: 'currency',
				currency: selectedCountry.currency,
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			}).format(amount);
		},
		[selectedCountry]
	);

	// --- Event Handlers ---

	const addTeamMember = (roleId: string) => {
		setTeamMembers([
			...teamMembers,
			{
				id: uuidv4(),
				roleId: roleId,
				staffCount: 1,
				experienceLevel: 'Intermediate',
			},
		]);
		setIsModalOpen(false);
		setSearchTerm('');
	};

	const removeTeamMember = (id: string) => {
		setTeamMembers(teamMembers.filter((member) => member.id !== id));
	};

	const updateTeamMember = (id: string, field: keyof TeamMember, value: string | number | ExperienceLevel) => {
		setTeamMembers(teamMembers.map((member) => (member.id === id ? { ...member, [field]: value } : member)));
	};

	const incrementStaff = (id: string) => {
		setTeamMembers(teamMembers.map((member) => (member.id === id ? { ...member, staffCount: member.staffCount + 1 } : member)));
	};

	const decrementStaff = (id: string) => {
		setTeamMembers(teamMembers.map((member) => (member.id === id && member.staffCount > 1 ? { ...member, staffCount: member.staffCount - 1 } : member)));
	};

	// Placeholder function to reset the team
	const resetTeam = () => {
		setTeamMembers([
			{
				id: uuidv4(),
				roleId: availableRoles[0].id,
				staffCount: 1,
				experienceLevel: 'Intermediate',
			},
		]);
		setSelectedCountry(countries[0]);
		setSelectedWorkSetup(workSetups[0]);
		// Optionally scroll to top
		// window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// Placeholder function for scrolling to top
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// Placeholder function for sharing (e.g., copy link with state)
	const shareTeam = async () => {
		// Basic example: copy current URL
		try {
			await navigator.clipboard.writeText(window.location.href);
			alert('Link copied to clipboard!'); // Replace with a toast notification later
		} catch (err) {
			console.error('Failed to copy: ', err);
			alert('Failed to copy link.');
		}
		// More advanced: generate a URL with encoded state
	};

	// --- Calculations --- Use useMemo for performance
	const totals = useMemo(() => {
		let totalOnshore = 0;
		let totalStaffStack = 0;

		teamMembers.forEach((member) => {
			const costs = getRoleCosts(member.roleId, member.experienceLevel);
			if (costs) {
				totalOnshore += costs.hireOnshore * member.staffCount;
				totalStaffStack += costs.hireWithStaffStack * member.staffCount;
			}
		});

		const totalSavings = calculateSavings(totalOnshore, totalStaffStack);
		const savingsPercentage = totalOnshore > 0 ? Math.round((totalSavings / totalOnshore) * 100) : 0;

		return {
			totalOnshore,
			totalStaffStack,
			totalSavings,
			savingsPercentage,
		};
	}, [teamMembers]);

	// Filter roles for the modal based on search term
	const filteredRoles = useMemo(() => {
		if (!searchTerm) {
			return availableRoles;
		}
		return availableRoles.filter((role) => role.name.toLowerCase().includes(searchTerm.toLowerCase()) || role.description?.toLowerCase().includes(searchTerm.toLowerCase()));
	}, [searchTerm]);

	return (
		<div className='space-y-8 pb-16'>
			<div className='text-center mb-10'>
				<h1 className='text-4xl font-bold text-blue-600 mb-2'>Team Builder</h1>
				<p className='text-lg text-muted-foreground'>Hire top talent fast, for much less than you expect.</p>
			</div>

			<div className='flex justify-between items-center mb-6 flex-wrap gap-4'>
				<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
					<DialogTrigger asChild>
						<Button className='bg-blue-600 hover:bg-blue-700 text-white'>Add Team Member</Button>
					</DialogTrigger>
					<DialogContent className='sm:max-w-[600px] max-h-[80vh] flex flex-col'>
						<DialogHeader>
							<DialogTitle className='text-2xl font-bold text-center mb-4'>Add Team Member</DialogTitle>
						</DialogHeader>
						<div className='relative mb-4'>
							<Search className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground' />
							<Input type='text' placeholder='Search staff...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='pl-10 w-full' />
						</div>
						<div className='flex-grow overflow-y-auto pr-2 space-y-3'>
							{filteredRoles.length > 0 ? (
								filteredRoles.map((role) => (
									<button key={role.id} onClick={() => addTeamMember(role.id)} className='block w-full text-left p-4 rounded-lg hover:bg-accent transition-colors border'>
										<p className='font-semibold text-lg mb-1'>{role.name}</p>
										<p className='text-sm text-muted-foreground'>{role.description || 'No description available.'}</p>
									</button>
								))
							) : (
								<p className='text-center text-muted-foreground py-4'>No roles found matching "{searchTerm}".</p>
							)}
						</div>
					</DialogContent>
				</Dialog>

				<div className='flex items-center gap-4'>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='outline'>
								{selectedWorkSetup}
								<ChevronDown className='ml-2 h-4 w-4' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							{workSetups.map((setup) => (
								<DropdownMenuItem key={setup} onSelect={() => setSelectedWorkSetup(setup)}>
									{setup}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='outline'>
								{selectedCountry.label}
								<ChevronDown className='ml-2 h-4 w-4' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							{countries.map((country) => (
								<DropdownMenuItem key={country.value} onSelect={() => setSelectedCountry(country)}>
									{country.label}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>

			<Card className='overflow-hidden'>
				<CardContent className='p-0'>
					<div className='overflow-x-auto'>
						<div className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
							<div className='grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
								<div className='col-span-1'>Role</div>
								<div>Staff Required</div>
								<div>Experience Level</div>
								<div>Your Savings</div>
								<div>Hire Onshore</div>
								<div>Hire with StaffStack</div>
							</div>

							<div className='divide-y divide-gray-200 dark:divide-gray-700'>
								{teamMembers.map((member) => {
									const costs = getRoleCosts(member.roleId, member.experienceLevel);
									const savings = costs ? calculateSavings(costs.hireOnshore, costs.hireWithStaffStack) : 0;
									const roleData = availableRoles.find((r) => r.id === member.roleId);

									return (
										<div key={member.id} className='grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-6 py-4 items-center text-sm'>
											<div className='col-span-1 font-medium flex flex-col items-start'>
												<DropdownMenu>
													<DropdownMenuTrigger asChild>
														<button className='w-full justify-start text-left font-semibold p-1 rounded hover:bg-accent focus:outline-none focus-visible:ring-1 focus-visible:ring-ring'>
															{roleData?.name || 'Select Role'}
														</button>
													</DropdownMenuTrigger>
													<DropdownMenuContent className='w-[300px]'>
														{availableRoles.map((role) => (
															<DropdownMenuItem key={role.id} onSelect={() => updateTeamMember(member.id, 'roleId', role.id)}>
																{role.name}
															</DropdownMenuItem>
														))}
													</DropdownMenuContent>
												</DropdownMenu>
												<Button variant='ghost' size='icon' onClick={() => removeTeamMember(member.id)} className='text-red-500 hover:text-red-700 h-6 w-6 mt-1'>
													<XCircle className='h-4 w-4' />
												</Button>
											</div>

											<div className='flex items-center space-x-1 justify-center'>
												<Button variant='ghost' size='icon' onClick={() => decrementStaff(member.id)} disabled={member.staffCount <= 1} className='h-6 w-6'>
													<MinusCircle className='h-4 w-4' />
												</Button>
												<Input
													type='number'
													className='h-8 w-10 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-1'
													value={member.staffCount}
													onChange={(e) => updateTeamMember(member.id, 'staffCount', Math.max(1, parseInt(e.target.value, 10) || 1))}
													min='1'
												/>
												<Button variant='ghost' size='icon' onClick={() => incrementStaff(member.id)} className='h-6 w-6'>
													<PlusCircle className='h-4 w-4' />
												</Button>
											</div>

											<div>
												<Select value={member.experienceLevel} onValueChange={(value: ExperienceLevel) => updateTeamMember(member.id, 'experienceLevel', value)}>
													<SelectTrigger className='h-8 text-xs px-2'>
														<SelectValue placeholder='Select Level' />
													</SelectTrigger>
													<SelectContent>
														{experienceLevels.map((level) => (
															<SelectItem key={level} value={level} className='text-xs'>
																{level}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</div>

											<div className='font-medium text-green-600 dark:text-green-400 text-right'>{formatCurrency(savings * member.staffCount)}</div>
											<div className='font-medium text-right'>{costs ? formatCurrency(costs.hireOnshore * member.staffCount) : '-'}</div>
											<div className='font-medium text-blue-600 dark:text-blue-400 text-right'>{costs ? formatCurrency(costs.hireWithStaffStack * member.staffCount) : '-'}</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardContent className='pt-6 space-y-4'>
					<div className='flex justify-between items-center'>
						<span className='text-muted-foreground'>Monthly cost of hiring yourself</span>
						<span className='font-semibold'>{formatCurrency(totals.totalOnshore)}</span>
					</div>
					<Separator />
					<div className='flex justify-between items-center'>
						<span className='text-muted-foreground'>Monthly savings with StaffStack</span>
						<span className='font-semibold text-green-600 dark:text-green-400'>{formatCurrency(totals.totalSavings)}</span>
					</div>
					<Separator />
					<div className='flex justify-between items-center'>
						<span className='text-muted-foreground'>You could be saving</span>
						<span className='font-semibold text-green-600 dark:text-green-400'>{totals.savingsPercentage}%</span>
					</div>
					<Separator />
					<div className='mt-6 text-center'>
						<p className='text-muted-foreground'>Estimated Monthly Cost:</p>
						<p className='text-4xl font-bold text-blue-600 dark:text-blue-400'>{formatCurrency(totals.totalStaffStack)}</p>
					</div>

					<div className='mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center space-y-6'>
						<div className='flex justify-center items-center gap-2 flex-wrap'>
							<Button asChild className='bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 text-base'>
								<Link href='/contact-us'>
									Get more information
									<MessageCircle className='ml-2 h-5 w-5' />
								</Link>
							</Button>
							<Button
								asChild
								variant='outline'
								className='border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-blue-400 dark:border-blue-500 rounded-full px-6 py-3 text-base'
							>
								<Link href='/roles'>View Our Ready Talents</Link>
							</Button>
						</div>

						<div className='flex justify-center items-center gap-4 text-sm text-muted-foreground'>
							<button onClick={scrollToTop} className='flex items-center gap-1 hover:text-primary'>
								<ArrowUp className='h-4 w-4' />
								Top
							</button>
							<Separator orientation='vertical' className='h-4' />
							<button onClick={resetTeam} className='flex items-center gap-1 hover:text-primary'>
								<RefreshCw className='h-4 w-4' />
								Reset
							</button>
							<Separator orientation='vertical' className='h-4' />
							<button onClick={shareTeam} className='flex items-center gap-1 hover:text-primary'>
								<Share2 className='h-4 w-4' />
								Share Team
							</button>
						</div>
					</div>
				</CardContent>
			</Card>

			<div className='mt-10 text-xs text-muted-foreground space-y-3 px-4'>
				<p>
					This calculator provides the approximate monthly savings of hiring staff in the cloud with StaffStack versus hiring locally. It provides indicative pricing only and is not an official quote.
				</p>
				<p>
					The StaffStack pricing is based on the typical Employee Salary for the role (including all government mandated costs), the StaffStack Management Fee and the StaffStack Hardware Fee (based on
					a standard hardware configuration). These costs may vary.
				</p>
				<p>
					The local hiring costs are based on research from employment agencies for similar roles. An additional cost per person per month has been added based on the typical cost of office space,
					hardware costs, IT support and HR functions. These additional costs provide a more accurate comparison with the StaffStack offering.
				</p>
			</div>
		</div>
	);
}
