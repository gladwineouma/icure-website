import React, { useState } from "react";
import Navbar from "../components/Navbar";
import OutreachHero from "../components/Outreach/OutreachHero";
import StoryGrid from "../components/Outreach/StoryGrid";
import StoryModal from "../components/Outreach/StoryModal";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/Watsapp/WatsappButton";
import { sortedStories } from "../components/Outreach/storiesData";


export default function OutreachPage() {
    const [active, setActive] = useState(null);

    return (
        <div className="min-h-screen bg-background">
            <OutreachHero />
            <StoryGrid stories={sortedStories} onSelectStory={setActive} />
            <StoryModal activeStory={active} onClose={() => setActive(null)} />
            <WhatsAppButton />
        </div>
    );
}
