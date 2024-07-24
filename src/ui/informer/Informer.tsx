"use client"

import {Button} from "@/ui/button";
import "./informer.css";
import {useRouter} from "next/navigation";

export default function Informer() {
    const router = useRouter();
    
    const handleMenuButton = async () => {
        console.log("menu");

        router.push('/menu', { scroll: true });
    }

    const handlePlanButton = async () => {
        console.log("plan");

        router.push('/plan', { scroll: true });
    }
    
    return (
        <div className="w-full informer-center">
            <Button color="info"
                    onClick={handleMenuButton}
                    className="informer-center-button informer-center-button-left">
                Menu
            </Button>
            <Button color="info"
                    onClick={handlePlanButton}
                    className="informer-center-button informer-center-button-right">
                Plan
            </Button>
        </div>
    )
}