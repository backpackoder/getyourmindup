import { useRouter } from "next/navigation";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

type ListItemTemplateProps = {
  navigateTo?: (url: string) => void;
  route: any;
  isActive: boolean;
};

export function ListItemTemplate({ navigateTo, route, isActive }: ListItemTemplateProps) {
  const router = useRouter();

  return (
    <ListItem
      sx={{
        transitionDuration: "0.25s",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "primary.light",
        },
      }}
      onClick={() => (navigateTo ? navigateTo(route.path) : router.push(route.path))}
    >
      <ListItemIcon>{route.icon}</ListItemIcon>
      <ListItemText
        primary={route.label}
        sx={{
          color: isActive ? "primary.main" : "text.primary",
        }}
      />
    </ListItem>
  );
}
