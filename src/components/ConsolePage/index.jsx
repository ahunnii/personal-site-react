import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import StatsPanel from "../StatsPanel.jsx";

export default function ConsolePage({ title, children }) {
	return <div className="tab-pane fade in">{children}</div>;
}
