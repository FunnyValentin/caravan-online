import ThemeToggle from "@/components/ThemeToggle.tsx";

export default function Login(){
    return(
        <div className="flex">
            <ThemeToggle/>
            <h2 className="mt-6 text-3xl font-extrabold">Log in</h2>
        </div>
    )
}
