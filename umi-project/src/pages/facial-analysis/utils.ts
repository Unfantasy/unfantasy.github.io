export const drawBox = ({ ctx, x, y, w, h, emoji }) => {
  ctx.strokeStyle = EmojiToColor[emoji];
  ctx.lineWidth = '4';
  ctx.strokeRect(x, y, w, h);
};

export const drawText = ({ ctx, x, y, text }) => {
  const padding = 4;
  ctx.fillStyle = '#ff6347';
  ctx.font = '16px';
  ctx.textBaseline = 'top';
  ctx.fillText(text, x + padding, y + padding);
};
