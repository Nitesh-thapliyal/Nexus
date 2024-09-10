import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";

const CreateProjectForm = () => {

  const form = useForm({
    defaultValues:{
        name: "",
        description: "",
        category: "",
        tags:["javascript", "react"]
    }
  })
  
  const onSubmit=(data)=>{
    console.log("create project data", data);
  }

  return (
    <div>
        <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control}
                name = "name"
                render={({field}) => <FormItem>
                    <FormControl>
                        <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5" placeholder="project name"/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>}
                />
                <FormField control={form.control}
                name = "description"
                render={({field}) => <FormItem>
                    <FormControl>
                        <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5" placeholder="project description"/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>}
                />
                <FormField control={form.control}
                name = "category"
                render={({field}) => <FormItem>
                    <FormControl>
                        <Select
                            defaultValue="fullstack"
                            value={field.value}
                            onValueChange={(value) => {
                              field.OnChange(value)
                            } }
                            
                            //className="border w-full border-gray-700 py-5 px-5"
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Category"/>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fullstack">FullStack</SelectItem>
                            <SelectItem value="frontend">Frontend</SelectItem>
                            <SelectItem value="backend">Backend</SelectItem>
                          </SelectContent>
                        </Select>

                    </FormControl>
                    <FormMessage/>
                </FormItem>}
                />
                <FormField control={form.control}
                name = "tags"
                render={({field}) => <FormItem>
                    <FormControl>
                        <Select
                            value={field.value}
                            onValueChange={(value) => {
                              field.OnChange(value)
                            } }
                            
                            //className="border w-full border-gray-700 py-5 px-5"
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Tags"/>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fullstack">FullStack</SelectItem>
                            <SelectItem value="frontend">Frontend</SelectItem>
                            <SelectItem value="backend">Backend</SelectItem>
                          </SelectContent>
                        </Select>

                    </FormControl>
                    <FormMessage/>
                </FormItem>}
                />
                <DialogClose>
                    {false? <div><p>you can create only 3 project with free line,
                        please upgrade your plan </p></div> : <Button type="submit" className="w-full mt-5" > Create Project</Button>}
                </DialogClose>
            </form>
        </Form>
    </div>
  )
}

export default CreateProjectForm