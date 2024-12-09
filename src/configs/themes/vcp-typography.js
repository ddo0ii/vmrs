const getTypographyVariants = (size, weight, lineHeight, letterSpacing) => ({
  fontFamily: 'Pretendard',
  fontSize: size,
  fontWeight: weight,
  lineHeight: lineHeight,
  letterSpacing: letterSpacing,
});

export const VCPTypography = {
  fontFamily: 'Pretendard',

  // Heading Variants
  'h1.thin': getTypographyVariants('2.5rem', 300, 1.7, '0.005em'),
  'h1.regular': getTypographyVariants('2.5rem', 400, 1.7, '0.005em'),
  'h1.semiBold': getTypographyVariants('2.5rem', 600, 1.7, '0.005em'),
  'h1.bold': getTypographyVariants('2.5rem', 700, 1.7, '0.005em'),

  'h2.thin': getTypographyVariants('2rem', 300, 1.5, '0.01em'),
  'h2.regular': getTypographyVariants('2rem', 400, 1.5, '0.01em'),
  'h2.semiBold': getTypographyVariants('2rem', 600, 1.5, '0.01em'),
  'h2.bold': getTypographyVariants('2rem', 700, 1.5, '0.01em'),

  'h3.thin': getTypographyVariants('1.75rem', 300, 1.5, '0.01em'),
  'h3.regular': getTypographyVariants('1.75rem', 400, 1.5, '0.01em'),
  'h3.semiBold': getTypographyVariants('1.75rem', 600, 1.5, '0.01em'),
  'h3.bold': getTypographyVariants('1.75rem', 700, 1.5, '0.01em'),

  'h4.regular': getTypographyVariants('1.5rem', 400, 1.5, '0.01em'),
  'h4.semiBold': getTypographyVariants('1.5rem', 600, 1.5, '0.01em'),
  'h4.bold': getTypographyVariants('1.5rem', 700, 1.5, '0.01em'),

  'h5.regular': getTypographyVariants('1.25rem', 400, 1.5, '0.01em'),
  'h5.semiBold': getTypographyVariants('1.25rem', 600, 1.5, '0.01em'),
  'h5.bold': getTypographyVariants('1.25rem', 700, 1.5, '0.01em'),

  'h6.regular': getTypographyVariants('1rem', 400, 1.5, '0.01em'),
  'h6.semiBold': getTypographyVariants('1rem', 600, 1.5, '0.01em'),
  'h6.bold': getTypographyVariants('1rem', 700, 1.5, '0.01em'),

  // Body Text Variants
  'body.xSmall.thin': getTypographyVariants('0.75rem', 300, 1.4, '0.02em'),
  'body.xSmall.regular': getTypographyVariants('0.75rem', 400, 1.4, '0.02em'),
  'body.xSmall.semiBold': getTypographyVariants('0.75rem', 600, 1.4, '0.02em'),
  'body.xSmall.bold': getTypographyVariants('0.75rem', 700, 1.4, '0.02em'),

  'body.small.thin': getTypographyVariants('0.875rem', 300, 1.4, '0.02em'),
  'body.small.regular': getTypographyVariants('0.875rem', 400, 1.4, '0.02em'),
  'body.small.semiBold': getTypographyVariants('0.875rem', 600, 1.4, '0.02em'),
  'body.small.bold': getTypographyVariants('0.875rem', 700, 1.4, '0.02em'),

  'body.medium.thin': getTypographyVariants('1rem', 300, 1.5, '0.02em'),
  'body.medium.regular': getTypographyVariants('1rem', 400, 1.5, '0.02em'),
  'body.medium.semiBold': getTypographyVariants('1rem', 600, 1.5, '0.02em'),
  'body.medium.bold': getTypographyVariants('1rem', 700, 1.5, '0.02em'),

  'body.large.thin': getTypographyVariants('1.125rem', 300, 1.6, '0.01em'),
  'body.large.regular': getTypographyVariants('1.125rem', 400, 1.6, '0.01em'),
  'body.large.semiBold': getTypographyVariants('1.125rem', 600, 1.6, '0.01em'),
  'body.large.bold': getTypographyVariants('1.125rem', 700, 1.6, '0.01em'),

  'body.xLarge.thin': getTypographyVariants('1.25rem', 300, 1.6, '0.01em'),
  'body.xLarge.regular': getTypographyVariants('1.25rem', 400, 1.6, '0.01em'),
  'body.xLarge.semiBold': getTypographyVariants('1.25rem', 600, 1.6, '0.01em'),
  'body.xLarge.bold': getTypographyVariants('1.25rem', 700, 1.6, '0.01em'),

  // Caption
  'caption.small': getTypographyVariants('0.75rem', 400, 1.4, '0.02em'),
  'caption.medium': getTypographyVariants('0.875rem', 400, 1.5, '0.02em'),
  'caption.large': getTypographyVariants('1rem', 400, 1.6, '0.01em'),

  // Table Variants
  'table.header': getTypographyVariants('1rem', 600, 1.5, '0.02em'),
  'table.body': getTypographyVariants('0.875rem', 400, 1.5, '0.01em'),

  // Button Variants
  'button.small': getTypographyVariants('0.75rem', 600, 1.4, '0.02em'),
  'button.medium': getTypographyVariants('0.875rem', 600, 1.5, '0.02em'),
  'button.large': getTypographyVariants('1rem', 600, 1.6, '0.01em'),

  // Label Variants
  'label.small': getTypographyVariants('0.75rem', 400, 1.4, '0.02em'),
  'label.medium': getTypographyVariants('0.875rem', 400, 1.5, '0.02em'),
  'label.large': getTypographyVariants('1rem', 400, 1.6, '0.01em'),

  // Placeholder Variants
  'placeholder.small': getTypographyVariants('0.75rem', 300, 1.4, '0.01em'),
  'placeholder.medium': getTypographyVariants('0.875rem', 300, 1.5, '0.01em'),
  'placeholder.large': getTypographyVariants('1rem', 300, 1.6, '0.005em'),

  // Overline
  'overline.small': getTypographyVariants('0.75rem', 400, 1.4, '0.02em'),
  'overline.medium': getTypographyVariants('0.875rem', 400, 1.5, '0.02em'),
  'overline.large': getTypographyVariants('1rem', 400, 1.6, '0.01em'),
};
