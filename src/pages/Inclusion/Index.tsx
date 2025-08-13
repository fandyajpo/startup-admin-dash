import { FileEdit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogClose,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

import { TenantSchemaWithId } from "@/modules/tenant/tenant.typing";
import {
  useGetInclusion,
  useRemoveInclusionById,
} from "@/modules/inclusion/inclusion.hooks";

const TenantAction = (props: TenantSchemaWithId) => {
  const { mutate, isPending } = useRemoveInclusionById();
  return (
    <div className="flex items-center gap-2">
      <Button type="button" variant="outline">
        <Link to={`/inclusion/${props._id}`}>
          <FileEdit />
        </Link>
      </Button>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Trash />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete this
                tenant and remove their data from our servers.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                disabled={isPending}
                variant="destructive"
                type="button"
                onClick={() => mutate(props)}
              >
                Yes, delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

const Tenant = () => {
  const { data, isPending } = useGetInclusion();

  const columns: ColumnDef<TenantSchemaWithId>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        const tenant = row.original;
        return (
          <div>
            <div className="text-sm text-muted-foreground">{tenant.name}</div>
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const tenant = row.original;
        return <TenantAction {...tenant} />;
      },
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Tenants</h1>
          <p className="text-muted-foreground">Manage your tenant.</p>
        </div>
        <Link to={"/inclusion/create"}>
          <Button>Create Tenant</Button>
        </Link>
      </div>

      {isPending ? (
        <div className="w-4 h-4 border-r animate-spin" />
      ) : (
        <DataTable
          columns={columns}
          data={data?.data?.data}
          searchKey="name"
          searchPlaceholder="Search users..."
        />
      )}
    </div>
  );
};

export default Tenant;
