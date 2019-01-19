type SystemProp = number | string;

interface BorderProps {
  border?: SystemProp;
  borderTop?: SystemProp;
  borderRight?: SystemProp;
  borderBottom?: SystemProp;
  borderLeft?: SystemProp;
  borderColor?: SystemProp;
  borderRadius?: SystemProp;
}

interface DisplayProps {
  display?: SystemProp;
  displayPrint?: SystemProp;
}

interface FlexboxProps {
  flexDirection?: SystemProp;
  flexWrap?: SystemProp;
  justifyContent?: SystemProp;
  alignItems?: SystemProp;
  alignContent?: SystemProp;
  order?: SystemProp;
  flex?: SystemProp;
  flexGrow?: SystemProp;
  flexShrink?: SystemProp;
  alignSelf?: SystemProp;
}

interface PaletteProps {
  color?: SystemProp;
  bgcolor?: SystemProp;
}

interface PositionsProps {
  zIndex?: SystemProp;
  position?: SystemProp;
  top?: SystemProp;
  right?: SystemProp;
  bottom?: SystemProp;
  left?: SystemProp;
}

interface ShadowsProps {
  boxShadow?: SystemProp;
}

interface SizingProps {
  width?: SystemProp;
  height?: SystemProp;
  minWidth?: SystemProp;
  minHeight?: SystemProp;
  maxWidth?: SystemProp;
  maxHeight?: SystemProp;
}
interface SpacingProps {
  m?: SystemProp;
  mt?: SystemProp;
  mr?: SystemProp;
  mb?: SystemProp;
  ml?: SystemProp;
  mx?: SystemProp;
  my?: SystemProp;
  p?: SystemProp;
  pt?: SystemProp;
  pr?: SystemProp;
  pb?: SystemProp;
  pl?: SystemProp;
  px?: SystemProp;
  py?: SystemProp;
}

interface TypographyProps {
  textAlign?: SystemProp;
  fontWeight?: SystemProp;
  fontSize?: SystemProp;
  fontFamily?: string;
}

interface StyleProps {
  style?: object;
  className?: string;
  component?: any;
}

export type BoxProps = BorderProps &
  DisplayProps &
  FlexboxProps &
  PaletteProps &
  PositionsProps &
  ShadowsProps &
  SizingProps &
  SpacingProps &
  TypographyProps &
  StyleProps;
