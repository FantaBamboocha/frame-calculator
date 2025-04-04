export type MaterialKey = "metal" | "plastic";
export type FrameKey = "light" | "standard" | "strong";
export type SizeKey = "width" | "length";
export type FixKey = MaterialKey;

export interface SizeConfigItem {
  type: "size";
  key: SizeKey;
  name: string;
  min: number;
  max: number;
  step: number;
}

export interface FrameConfigItem {
  type: "frame";
  key: FrameKey;
  name: string;
  step: number;
}

export interface MaterialConfigItem {
  type: "material";
  key: MaterialKey;
  name: string;
}

export interface FixConfigItem {
  type: "fix";
  key: MaterialKey;
  name: string;
  value: number;
}

export type ConfigItem =
  | SizeConfigItem
  | FrameConfigItem
  | MaterialConfigItem
  | FixConfigItem;
