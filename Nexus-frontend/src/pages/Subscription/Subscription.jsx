import SubscriptionCard from "./SubscriptionCard";

const paidPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Customization Option",
    "Integeration Support",
    "Advanced Security",
    "Training and Resources",
    "Access Control",
    "Custom Workflows"
];

const annualPlan = [

    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Everything which monthly plan has"
];

const freePlan = [

    "Add only 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notification",
    "Basic Access Control"
]


const Subscription = () => {
  return (
    <div className="p-10">
        <h1 className="text-5xl font-semibold py-5 pb-16 text-center"> Pricing</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
            <SubscriptionCard data={{
                planName:"Free", 
                feature: freePlan, 
                planType:"FREE", 
                price:0, 
                buttonName:true?"Current Plan" : "Get Started"
                }}/>
            <SubscriptionCard data={{
                planName:"Monthly Paid Plan", 
                feature: paidPlan, 
                planType:"MONTHLY", 
                price:799, 
                buttonName:true?"Current Plan" : "Get Started"
                }}/>
            <SubscriptionCard data={{
                planName:"Annual Paid Plan", 
                feature: annualPlan, 
                planType:"ANNUALLY", 
                price:6711, 
                buttonName:true?"Current Plan" : "Get Started"
                }}/>
        </div>

    </div>
  )
}

export default Subscription