import { FrameConfigItem, PipeFormDataItem } from "@shared/types";

export const calculatePipes = (
  pipeData: PipeFormDataItem,
  frameData: FrameConfigItem,
  constructionWidth: number,
  constructionLength: number,
) => {
  const pipeWidth = pipeData.width / 1000;

  const calculateSpacing = (totalDistance: number) => {
    const maxStep = frameData.step;
    let pipeCount = Math.ceil(totalDistance / maxStep) + 1; // труб должно быть больше, чем промежутков

    // количество труб с учетом ширины
    let spacing = (totalDistance - pipeWidth * pipeCount) / (pipeCount - 1); // промежутков должно быть меньше

    // увеличение количества труб до достижения условия
    while (spacing > maxStep && pipeCount < 100) {
      pipeCount += 1;
      spacing = (totalDistance - pipeWidth * pipeCount) / (pipeCount - 1);
    }

    return {
      pipeCount,
      spacing: Math.max(spacing, pipeWidth),
    };
  };

  const widthwise = calculateSpacing(constructionWidth);
  const lengthwise = calculateSpacing(constructionLength);

  const widthwisePipes = widthwise.pipeCount * constructionLength;
  const lengthwisePipes = lengthwise.pipeCount * constructionWidth;
  const totalPipes = widthwisePipes + lengthwisePipes;

  return {
    count: totalPipes,
    cellSize: {
      width: widthwise.spacing + pipeWidth,
      length: lengthwise.spacing + pipeWidth,
    },
    totalPrice: totalPipes * pipeData.price,
  };
};
