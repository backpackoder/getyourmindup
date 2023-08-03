"use client";

import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function RelaxAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Music</Typography>
          <Typography sx={{ color: "text.secondary" }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>1st Accordion</AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Podcasts</Typography>
          <Typography sx={{ color: "text.secondary" }}>You are currently not an owner</Typography>
        </AccordionSummary>
        <AccordionDetails>2nd Accordion</AccordionDetails>
      </Accordion>
    </div>
  );
}
