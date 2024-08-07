import { redirect } from "next/navigation";

export default function Home() {
  const seed = Math.floor(Math.random() * 0x100000000);
  const width = 10;
  const bomb = 10;
  const open = "0".repeat(width * width);
  redirect(`/${seed}/${width}/${bomb}/${open}`);
} 