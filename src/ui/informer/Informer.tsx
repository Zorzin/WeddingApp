"use client"

import {Button} from "@/ui/button";
import "./informer.css";
import {useRouter} from "next/navigation";

export default function Informer() {
    const router = useRouter();
    
    const handleMenuButton = async () => {
        router.push('/menu', { scroll: true });
    }

    const handlePlanButton = async () => {
        router.push('/plan', { scroll: true });
    }
    
    return (
        <div className="w-full informer-center mb-12">
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