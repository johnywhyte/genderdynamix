import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const PaddingWrapper = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div className={cn("mx-auto max-w-[1300px] px-4 md:px-10", className)} {...props}>
      {children}
    </div>
  );
};

export default PaddingWrapper;
