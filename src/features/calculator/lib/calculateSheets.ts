import { SHEET_LENGTH } from "@shared/consts/sheetLength";
import { SheetFormDataItem } from "@shared/types";

export const calculateSheets = (
  sheet: SheetFormDataItem,
  width: number,
  length: number,
  isRotated: boolean,
) => {
  const effectiveWidth = isRotated ? SHEET_LENGTH : sheet.width;
  const effectiveLength = isRotated ? sheet.width : SHEET_LENGTH;

  const sheetsPerRow = Math.ceil(width / effectiveWidth);
  const rowsCount = Math.ceil(length / effectiveLength);

  const totalSheets = sheetsPerRow * rowsCount;
  const area = totalSheets * effectiveWidth * effectiveLength;

  return {
    count: totalSheets,
    area,
    totalPrice: area * sheet.price,
    isRotated,
  };
};

export const calculateOptimalSheets = (
  sheet: SheetFormDataItem,
  width: number,
  length: number,
) => {
  const vertical = calculateSheets(sheet, width, length, false);
  const horizontal = calculateSheets(sheet, width, length, true);

  return vertical.count <= horizontal.count ? vertical : horizontal;
};
