import { RocketIcon } from "lucide-react";

export function Logo() {
    return (
        <div className="bg-primary text-primary-foreground h-6 w-6 flex items-center justify-center rounded-md cursor-pointer">
            <RocketIcon  className="w-3 h-3 " />
        </div>
    )
}