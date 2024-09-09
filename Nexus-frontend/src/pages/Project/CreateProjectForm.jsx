import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
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
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control}
                name = "name"
                render={({field}) => <FormItem>
                    <FormControl>
                        <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5" placeholder="project name"/>
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