"use client";

import {
  ArrowUp,
  ChevronDown,
  MessageCircle,
  MinusCircle,
  PlusCircle,
  RefreshCw,
  Search,
  Share2,
  XCircle,
} from "lucide-react";
import Link from "next/link"; // Import Link
import { useCallback, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // For unique keys
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input"; // Simple incrementer for now
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  type CountryOption,
  countries,
  type WorkSetupOption,
  workSetups,
} from "@/lib/data/options";
import {
  availableRoles,
  calculateSavings,
  type ExperienceLevel,
  experienceLevels,
  getRoleCosts,
} from "@/lib/data/roles";

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
      experienceLevel: "Intermediate",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // State for dropdowns
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(
    countries[0],
  ); // Default to US
  const [selectedWorkSetup, setSelectedWorkSetup] = useState<WorkSetupOption>(
    workSetups[0],
  ); // Default to Office

  // --- Currency Formatter --- (Using useCallback for stability)
  const formatCurrency = useCallback(
    (amount: number): string => {
      return new Intl.NumberFormat("en-US", {
        // Locale can be dynamic based on country later
        style: "currency",
        currency: selectedCountry.currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);
    },
    [selectedCountry],
  );

  // --- Event Handlers ---

  const addTeamMember = (roleId: string) => {
    setTeamMembers([
      ...teamMembers,
      {
        id: uuidv4(),
        roleId: roleId,
        staffCount: 1,
        experienceLevel: "Intermediate",
      },
    ]);
    setIsModalOpen(false);
    setSearchTerm("");
  };

  const removeTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  const updateTeamMember = (
    id: string,
    field: keyof TeamMember,
    value: string | number | ExperienceLevel,
  ) => {
    setTeamMembers(
      teamMembers.map((member) =>
        member.id === id ? { ...member, [field]: value } : member,
      ),
    );
  };

  const incrementStaff = (id: string) => {
    setTeamMembers(
      teamMembers.map((member) =>
        member.id === id
          ? { ...member, staffCount: member.staffCount + 1 }
          : member,
      ),
    );
  };

  const decrementStaff = (id: string) => {
    setTeamMembers(
      teamMembers.map((member) =>
        member.id === id && member.staffCount > 1
          ? { ...member, staffCount: member.staffCount - 1 }
          : member,
      ),
    );
  };

  // Placeholder function to reset the team
  const resetTeam = () => {
    setTeamMembers([
      {
        id: uuidv4(),
        roleId: availableRoles[0].id,
        staffCount: 1,
        experienceLevel: "Intermediate",
      },
    ]);
    setSelectedCountry(countries[0]);
    setSelectedWorkSetup(workSetups[0]);
    // Optionally scroll to top
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Placeholder function for scrolling to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Placeholder function for sharing (e.g., copy link with state)
  const shareTeam = async () => {
    // Basic example: copy current URL
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!"); // Replace with a toast notification later
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Failed to copy link.");
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
    const savingsPercentage =
      totalOnshore > 0 ? Math.round((totalSavings / totalOnshore) * 100) : 0;

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
    return availableRoles.filter(
      (role) =>
        role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.description?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <div className="container mx-auto max-w-6xl space-y-12 pb-20">
      {/* Header */}
      <div className="text-center my-12">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4 tracking-tight">
          Team Builder
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Hire top talent fast, for much less than you expect.
        </p>
      </div>

      {/* Controls Row */}
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        {/* Add Member Dialog */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6"
            >
              Add Team Member
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[650px] max-h-[80vh] flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-6">
                Add Team Member
              </DialogTitle>
            </DialogHeader>
            <div className="relative mb-5">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search staff..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full py-6 text-base"
              />
            </div>
            <div className="flex-grow overflow-y-auto pr-2 space-y-3">
              {filteredRoles.length > 0 ? (
                filteredRoles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => addTeamMember(role.id)}
                    className="block w-full text-left p-5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800"
                  >
                    <p className="font-semibold text-lg mb-1">{role.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {role.description || "No description available."}
                    </p>
                  </button>
                ))
              ) : (
                <div className="text-center py-8 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
                  <p className="text-muted-foreground">
                    No roles found matching "{searchTerm}"
                  </p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Dropdowns */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-gray-300 dark:border-gray-600 font-medium"
              >
                {selectedWorkSetup}
                <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[160px]">
              {workSetups.map((setup) => (
                <DropdownMenuItem
                  key={setup}
                  onSelect={() => setSelectedWorkSetup(setup)}
                  className="cursor-pointer"
                >
                  {setup}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-gray-300 dark:border-gray-600 font-medium"
              >
                {selectedCountry.label}
                <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[180px]">
              {countries.map((country) => (
                <DropdownMenuItem
                  key={country.value}
                  onSelect={() => setSelectedCountry(country)}
                  className="cursor-pointer"
                >
                  {country.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Team Builder Table Card */}
      <Card className="overflow-hidden shadow-md rounded-xl border-gray-200 dark:border-gray-800">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <div className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              {/* Header Row */}
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-6 py-4 bg-gray-50 dark:bg-gray-800/50 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <div className="col-span-1">Role</div>
                <div className="text-center">Staff Required</div>
                <div>Experience Level</div>
                <div className="text-right">Your Savings</div>
                <div className="text-right">Hire Onshore</div>
                <div className="text-right">Hire with StaffStack</div>
              </div>

              {/* Data Rows */}
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {teamMembers.map((member) => {
                  const costs = getRoleCosts(
                    member.roleId,
                    member.experienceLevel,
                  );
                  const savings = costs
                    ? calculateSavings(
                        costs.hireOnshore,
                        costs.hireWithStaffStack,
                      )
                    : 0;
                  const roleData = availableRoles.find(
                    (r) => r.id === member.roleId,
                  );

                  return (
                    <div
                      key={member.id}
                      className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-6 py-5 items-center text-sm hover:bg-gray-50/50 dark:hover:bg-gray-800/20"
                    >
                      {/* Role */}
                      <div className="col-span-1 font-medium flex flex-col items-start">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="w-full justify-start text-left font-semibold p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                              {roleData?.name || "Select Role"}
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-[320px] max-h-[280px] overflow-y-auto">
                            {availableRoles.map((role) => (
                              <DropdownMenuItem
                                key={role.id}
                                onSelect={() =>
                                  updateTeamMember(member.id, "roleId", role.id)
                                }
                                className="cursor-pointer py-2"
                              >
                                {role.name}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeTeamMember(member.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 h-6 w-6 mt-1.5 rounded-full"
                        >
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Staff Count */}
                      <div className="flex items-center space-x-1 justify-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => decrementStaff(member.id)}
                          disabled={member.staffCount <= 1}
                          className="h-7 w-7 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <MinusCircle className="h-4 w-4" />
                        </Button>
                        <Input
                          type="number"
                          className="h-8 w-12 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-1 border-gray-300 dark:border-gray-700"
                          value={member.staffCount}
                          onChange={(e) =>
                            updateTeamMember(
                              member.id,
                              "staffCount",
                              Math.max(
                                1,
                                Number.parseInt(e.target.value, 10) || 1,
                              ),
                            )
                          }
                          min="1"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => incrementStaff(member.id)}
                          className="h-7 w-7 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <PlusCircle className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Experience Level */}
                      <div>
                        <Select
                          value={member.experienceLevel}
                          onValueChange={(value: ExperienceLevel) =>
                            updateTeamMember(
                              member.id,
                              "experienceLevel",
                              value,
                            )
                          }
                        >
                          <SelectTrigger className="h-9 text-xs px-3 border-gray-300 dark:border-gray-700 focus:ring-blue-500">
                            <SelectValue placeholder="Select Level" />
                          </SelectTrigger>
                          <SelectContent>
                            {experienceLevels.map((level) => (
                              <SelectItem
                                key={level}
                                value={level}
                                className="text-sm cursor-pointer"
                              >
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Financial Data */}
                      <div className="font-medium text-green-600 dark:text-green-400 text-right">
                        {formatCurrency(savings * member.staffCount)}
                      </div>
                      <div className="font-medium text-right">
                        {costs
                          ? formatCurrency(
                              costs.hireOnshore * member.staffCount,
                            )
                          : "-"}
                      </div>
                      <div className="font-medium text-blue-600 dark:text-blue-400 text-right">
                        {costs
                          ? formatCurrency(
                              costs.hireWithStaffStack * member.staffCount,
                            )
                          : "-"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Card */}
      <Card className="shadow-md rounded-xl border-gray-200 dark:border-gray-800 overflow-hidden">
        <CardContent className="pt-8 space-y-5">
          <div className="flex justify-between items-center py-2.5">
            <span className="text-gray-600 dark:text-gray-300">
              Monthly cost of hiring yourself
            </span>
            <span className="font-semibold text-lg">
              {formatCurrency(totals.totalOnshore)}
            </span>
          </div>
          <Separator className="bg-gray-200 dark:bg-gray-700" />
          <div className="flex justify-between items-center py-2.5">
            <span className="text-gray-600 dark:text-gray-300">
              Monthly savings with StaffStack
            </span>
            <span className="font-semibold text-lg text-green-600 dark:text-green-400">
              {formatCurrency(totals.totalSavings)}
            </span>
          </div>
          <Separator className="bg-gray-200 dark:bg-gray-700" />
          <div className="flex justify-between items-center py-2.5">
            <span className="text-gray-600 dark:text-gray-300">
              You could be saving
            </span>
            <span className="font-semibold text-lg text-green-600 dark:text-green-400">
              {totals.savingsPercentage}%
            </span>
          </div>
          <Separator className="bg-gray-200 dark:bg-gray-700" />

          {/* Cost Summary */}
          <div className="mt-10 py-6 text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-3">
              Estimated Monthly Cost:
            </p>
            <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
              {formatCurrency(totals.totalStaffStack)}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 text-center space-y-8">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base font-medium shadow-sm hover:shadow-md transition-all"
              >
                <Link href="/contact-us">
                  Get more information
                  <MessageCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-blue-400 dark:border-blue-500 rounded-full px-8 py-6 text-base font-medium"
              >
                <Link href="/roles">View Our Ready Talents</Link>
              </Button>
            </div>

            {/* Utility Links */}
            <div className="flex justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
              >
                <ArrowUp className="h-4 w-4" />
                Top
              </button>
              <Separator
                orientation="vertical"
                className="h-5 bg-gray-300 dark:bg-gray-600"
              />
              <button
                onClick={resetTeam}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
              >
                <RefreshCw className="h-4 w-4" />
                Reset
              </button>
              <Separator
                orientation="vertical"
                className="h-5 bg-gray-300 dark:bg-gray-600"
              />
              <button
                onClick={shareTeam}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
              >
                <Share2 className="h-4 w-4" />
                Share Team
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer Section */}
      <div className="mt-12 text-xs text-gray-500 dark:text-gray-400 space-y-3 px-4 max-w-5xl mx-auto">
        <p>
          This calculator provides the approximate monthly savings of hiring
          staff in the cloud with StaffStack versus hiring locally. It provides
          indicative pricing only and is not an official quote.
        </p>
        <p>
          The StaffStack pricing is based on the typical Employee Salary for the
          role (including all government mandated costs), the StaffStack
          Management Fee and the StaffStack Hardware Fee (based on a standard
          hardware configuration). These costs may vary.
        </p>
        <p>
          The local hiring costs are based on research from employment agencies
          for similar roles. An additional cost per person per month has been
          added based on the typical cost of office space, hardware costs, IT
          support and HR functions. These additional costs provide a more
          accurate comparison with the StaffStack offering.
        </p>
      </div>
    </div>
  );
}
