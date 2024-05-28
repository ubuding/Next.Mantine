import type { MantineImageProps } from "#/Image/type";
import { Image as BaseImage } from "#/Image";
export const Image = (props: MantineImageProps) => {
  return <BaseImage className="waterfall-image" {...props} />;
};
