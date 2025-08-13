"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  inclusionSchema,
  InclusionSchemaMaybeWithId,
  inclusionSchemaWithId,
  type InclusionSchema,
} from "@/modules/inclusion/inclusion.typing";
import {
  useCreateInclusion,
  useUpdateInclusion,
} from "@/modules/inclusion/inclusion.hooks";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Props {
  method: "create" | "update";
  data?: InclusionSchemaMaybeWithId;
}

const InclusionForm = (props: Props) => {
  const { mutate: create, isPending: pendingCreate } = useCreateInclusion();
  const { mutate: update, isPending: pendingUpdate } = useUpdateInclusion();

  const form = useForm<InclusionSchemaMaybeWithId>({
    resolver: zodResolver(
      props.method === "update" ? inclusionSchemaWithId : inclusionSchema
    ),
    defaultValues:
      props.method === "update"
        ? props.data
        : {
            name: "",
            description: "",
            price: 0,
            status: "draft",
            type: "transportation",
            meta: {},
          },
  });

  function onSubmit(values: InclusionSchema) {
    console.log(values);
    if (props.method === "update") {
      update(values);
    } else {
      create(values);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card className="rounded-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                {props.method === "update"
                  ? "Edit Inclusion"
                  : "Create Inclusion"}
              </CardTitle>
              <Button
                type="submit"
                disabled={pendingCreate || pendingUpdate}
                className="px-8"
              >
                {props.method === "update" ? "Save Changes" : "Create"}
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-2 gap-2">
          {/* Left column */}
          <div className="flex flex-col gap-2">
            {/* Basic Info */}
            <Card className="rounded-sm">
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter price"
                          step="any"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-2">
            {/* Status */}
            <Card className="rounded-sm">
              <CardHeader>
                <CardTitle>Status</CardTitle>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Type */}
            <Card className="rounded-sm">
              <CardHeader>
                <CardTitle>Type</CardTitle>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="transportation">
                            Transportation
                          </SelectItem>
                          <SelectItem value="accommodation">
                            Accommodation
                          </SelectItem>
                          <SelectItem value="meal">Meal</SelectItem>
                          <SelectItem value="equipment">Equipment</SelectItem>
                          <SelectItem value="service">Service</SelectItem>
                          <SelectItem value="facility">Facility</SelectItem>
                          <SelectItem value="administration">
                            Administration
                          </SelectItem>
                          <SelectItem value="visa">Visa</SelectItem>
                          <SelectItem value="insurance">Insurance</SelectItem>
                          <SelectItem value="addon">Addon</SelectItem>
                          <SelectItem value="documentation">
                            Documentation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default InclusionForm;
