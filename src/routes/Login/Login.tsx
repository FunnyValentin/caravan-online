import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {login} from "@/services/auth.service.ts";
import {FormEvent, useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";

interface ILogin {
    email: string;
    password: string;
}

export default function Login(){
    const [formData, setFormData] = useState<ILogin>({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string |null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        if(!formData.email || !formData.password) {
            setError("Please fill out all fields");
            setIsLoading(false);
            return;
        }

        try {
            const loginData: ILogin = {
                email: formData.email,
                password: formData.password,
            }
            const response = await login(loginData);
            console.log(response);
        } catch(e) {
            setError("Invalid login credentials");
            console.error("Login error:", e)
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return(
        <div className="flex justify-center items-center w-full max-w-7xl">
            <Card>
                <CardHeader>
                    <h2 className="mt-6 text-3xl font-extrabold">Log in</h2>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="current-password"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="mt-1 border-background bg-card"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Password</label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                                className="mt-1 border-background bg-card"
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Logging in...' : 'Log in'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
