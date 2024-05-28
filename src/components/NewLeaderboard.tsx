import * as React from "react";
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table";
import {ChevronDown, IndianRupee, Percent, TrendingUp} from "lucide-react";

import {Button} from "../../../alliaz/src/components/ui/button";
import {Checkbox} from "./ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "../../../alliaz/src/components/ui/dropdown-menu";
import {Input} from "../../../alliaz/src/components/ui/input";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "../../../alliaz/src/components/ui/table";
import {CaretSortIcon} from "@radix-ui/react-icons";

export type LeaderboardData = {
    rank: number;
    name: string;
    calmarRatio: number;
    overallProfit: number;
    avgDailyProfit: number;
    winPercent: number;
    price: string;
    action: string;
};

const data: LeaderboardData[] = [
    {
        rank: 1,
        name: 'Selling with re entr',
        calmarRatio: 3.96,
        overallProfit: 381845,
        avgDailyProfit: 319.54,
        winPercent: 0.65,
        price: '-',
        action: 'View'
    },
    {
        rank: 2,
        name: 'strategy_name',
        calmarRatio: 3.62,
        overallProfit: 268872.5,
        avgDailyProfit: 216.31,
        winPercent: 0.64,
        price: '500',
        action: 'Buy'
    },
    {
        rank: 3,
        name: 'Based on premium and',
        calmarRatio: 3.42,
        overallProfit: 255425,
        avgDailyProfit: 208.51,
        winPercent: 0.64,
        price: '-',
        action: 'View'
    },
    {
        rank: 4,
        name: 'strategy_name',
        calmarRatio: 3.22,
        overallProfit: 370845,
        avgDailyProfit: 303.47,
        winPercent: 0.65,
        price: '-',
        action: 'View'
    },
    {
        rank: 5,
        name: 'strategy_name',
        calmarRatio: 3.22,
        overallProfit: 370845,
        avgDailyProfit: 303.47,
        winPercent: 0.65,
        price: '-',
        action: 'View'
    },
    {
        rank: 6,
        name: 'Based on premium wit',
        calmarRatio: 3.01,
        overallProfit: 135980,
        avgDailyProfit: 185.77,
        winPercent: 0.49,
        price: '-',
        action: 'View'
    },
    {
        rank: 7,
        name: 'strategy_name',
        calmarRatio: 2.76,
        overallProfit: 267867.5,
        avgDailyProfit: 218.49,
        winPercent: 0.60,
        price: '-',
        action: 'View'
    },
    {
        rank: 8,
        name: 'Wait and trade_Save',
        calmarRatio: 2.62,
        overallProfit: 178252.5,
        avgDailyProfit: 161.90,
        winPercent: 0.63,
        price: '-',
        action: 'View'
    },
    {
        rank: 9,
        name: 'iron condor',
        calmarRatio: 2.44,
        overallProfit: 176420,
        avgDailyProfit: 137.51,
        winPercent: 0.65,
        price: '-',
        action: 'View'
    },
    {
        rank: 10,
        name: 'strategy_name',
        calmarRatio: 2.04,
        overallProfit: 244555,
        avgDailyProfit: 198.66,
        winPercent: 0.62,
        price: '-',
        action: 'View'
    },
];

const columns: ColumnDef<LeaderboardData>[] = [
    {
        id: "select",
        header: ({table}) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "rank",
        header: ({column}) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="text-rose-600 p-0">
                Rank
                <CaretSortIcon className=" ml-2 h-4 w-4" color="#000000"/>
            </Button>
        ),
        cell: ({row}) => <div className="capitalize">{row.getValue('rank')}</div>,
    },
    {
        accessorKey: "name",
        header: ({column}) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="text-rose-600 p-0 hover:text-rose-700">
                Name
                <CaretSortIcon className="ml-2 h-4 w-4" color="#000000"/>
            </Button>
        ),
        cell: ({row}) => <div className="capitalize font-semibold">{row.getValue('name')}</div>,
    },
    {
        accessorKey: "calmarRatio",
        header: ({column}) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="text-rose-600 p-0 hover:text-rose-700">
                Calmar Ratio
                <CaretSortIcon className="ml-2 h-4 w-4" color="#000000"/>
            </Button>
        ),
        cell: ({row}) => <div className="capitalize flex font-semibold"><TrendingUp
            className="w-5 h-5 mr-1 text-[#10d876]"/>{row.getValue('calmarRatio')}</div>,
    },
    {
        accessorKey: "overallProfit",
        header: ({column}) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="text-rose-600 p-0 hover:text-rose-700">
                Overall Profit
                <CaretSortIcon className="ml-2 h-4 w-4" color="#000000"/>
            </Button>
        ),
        cell: ({row}) => <div className="capitalize font-semibold">{row.getValue('overallProfit')}</div>,
    },
    {
        accessorKey: "avgDailyProfit",
        header: ({column}) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="text-rose-600 p-0 hover:text-rose-700">
                Avg. Daily Profit
                <CaretSortIcon className="ml-2 h-4 w-4" color="#000000"/>
            </Button>
        ),
        cell: ({row}) => <div className="capitalize font-semibold">{row.getValue('avgDailyProfit')}</div>,
    },
    {
        accessorKey: "winPercent",
        header: ({column}) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="text-rose-600 p-0 hover:text-rose-700">
                Win <Percent size={10} strokeWidth={2} className="text-black ml-1"/>
                <CaretSortIcon className="ml-2 h-4 w-4" color="#000000"/>
            </Button>
        ),
        cell: ({row}) => <div className="capitalize font-semibold">{row.getValue('winPercent')}</div>,
    },
    {
        accessorKey: "price",
        header: ({column}) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="text-rose-600 p-0 hover:text-rose-700">
                Price <IndianRupee size={10} strokeWidth={2} className="text-black ml-1"/>
                <CaretSortIcon className="ml-2 h-4 w-4" color="#000000"/>
            </Button>
        ),
        cell: ({row}) => <div className="capitalize  font-semibold">{row.getValue('price')}</div>,
    },
    {
        id: "actions",
        header: ({column}) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="text-rose-600 p-0 hover:text-rose-700">
                Action
                <CaretSortIcon className="ml-2 h-4 w-4" color="#000000"/>
            </Button>
        ),
        cell: ({row}) => {
            const price = row.getValue('price');
            return price === "-" ? (
                <Button variant="outline" size="sm"
                        className="capitalize text-primary border-primary hover:bg-primary/90 hover:text-white ">View</Button>
            ) : (
                <Button variant="outline" size="sm"
                        className="capitalize text-blue-600 border-blue-600 hover:bg-blue-700 hover:text-white ">Buy</Button>
            );
        },
    },


];

export function DataTableDemo() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    );
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className="mt-10 mb-10 w-[95%]">
            <div className="flex items-center py-4">
                <h2 className="text-lg font-semibold mr-4">Basic Basket</h2>
                <Input
                    placeholder="Filter By Name..."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)}
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown className="ml-2 h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize text-rose-600 hover:text-rose-700"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className="p-4">
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
