import {Moon, Sun} from 'lucide-react';
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button.tsx";

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme')
            return savedTheme === 'dark'
        }
        return false
    })

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [isDarkMode])

    const toggleTheme = () => setIsDarkMode(!isDarkMode)

    return(
        <div>
            <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-full text-left"
            >
                {isDarkMode ? (
                    <Sun className="h-5 w-5" />
                ) : (
                    <Moon className="h-5 w-5" />
                )}
            </Button>
        </div>
    )
}
