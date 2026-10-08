import ProductFlowBlock from "./ProductFlowBlock";
import type { VidyasProductFlowPanel } from "@/lib/vidyasKitchenCaseStudyContent";

type Props = {
  eyebrow: string;
  headline: string;
  flows: VidyasProductFlowPanel[];
};

export default function WhatsAppStoryBlock(props: Props) {
  return <ProductFlowBlock {...props} />;
}
