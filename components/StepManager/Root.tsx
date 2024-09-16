"use client";

import { useStep } from "@/storage";
import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Root({ children }: Props) {
  const { step } = useStep();
  const managedNode = children as ReactElement[];

  const content = managedNode.find(
    (nodeChildren) => nodeChildren.props.type === "content"
  );
  
  const end = managedNode.find(
    (nodeChildren) => nodeChildren.props.type === "end"
  );

  if (!content || !end) throw new Error();

  return (
    <>
      <p>step: {step}</p>
      <p>content.props.children.length: {content.props.children.length}</p>
      {step < (content.props.children as ReactElement[]).length &&
        content.props.children[step]}

      {step > (content.props.children as ReactElement[]).length - 1 &&
        end}
    </>
  );
}
