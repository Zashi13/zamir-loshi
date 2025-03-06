import React, { useEffect } from 'react';
import PortfolioGrid from "../components/portfolioGrid.js";
export default function Portfolio (bodyBG){
    document.title = 'Portfolio';
     useEffect(() => {
        // Set the global CSS variable --bodyBackground when the component mounts
        document.documentElement.style.setProperty('--bodyBackground', `url(/assets/${bodyBG})`);
      }, [bodyBG]); // Ensure the effect runs when bodyBG changes
    
    return(
        <main>
            <PortfolioGrid />
        </main>
    );
}