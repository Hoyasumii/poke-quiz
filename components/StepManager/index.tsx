import { ReactNode } from "react";
import { Content as ContentComponent } from "./Content";
import { Root } from "./Root";

function Content({children}: {children: ReactNode}) {
  return <ContentComponent type="content" children={children} />
}

function End({children}: {children: ReactNode}) {
  return <ContentComponent type="end" children={children} />
}

export default { Root, Content, End } as const;
