const getTypographyVariants = (size, weight, lineHeight, letterSpacing) => ({
  fontSize: size,
  fontWeight: weight,
  lineHeight: lineHeight,
  letterSpacing: letterSpacing,
});

export const VCPTypography = {
  fontFamily: 'Pretendard',

  // Heading Variants
  h1: {
    thin: getTypographyVariants('2.5rem', 300, 1.7, '0.005em'),
    regular: getTypographyVariants('2.5rem', 400, 1.7, '0.005em'),
    semiBold: getTypographyVariants('2.5rem', 600, 1.7, '0.005em'),
    bold: getTypographyVariants('2.5rem', 700, 1.7, '0.005em'),
  },
  h2: {
    thin: getTypographyVariants('2rem', 300, 1.5, '0.01em'),
    regular: getTypographyVariants('2rem', 400, 1.5, '0.01em'),
    semiBold: getTypographyVariants('2rem', 600, 1.5, '0.01em'),
    bold: getTypographyVariants('2rem', 700, 1.5, '0.01em'),
  },
  h3: {
    thin: getTypographyVariants('1.75rem', 300, 1.5, '0.01em'),
    regular: getTypographyVariants('1.75rem', 400, 1.5, '0.01em'),
    semiBold: getTypographyVariants('1.75rem', 600, 1.5, '0.01em'),
    bold: getTypographyVariants('1.75rem', 700, 1.5, '0.01em'),
  },

  // Text Variants
  body: {
    small: getTypographyVariants('0.875rem', 400, 1.4, '0.02em'),
    medium: getTypographyVariants('1rem', 400, 1.5, '0.02em'),
    large: getTypographyVariants('1.125rem', 400, 1.6, '0.01em'),
  },

  // Table Variants
  table: {
    header: getTypographyVariants('1rem', 600, 1.5, '0.02em'),
    body: getTypographyVariants('0.875rem', 400, 1.5, '0.01em'),
  },

  // Button Variants
  button: {
    small: getTypographyVariants('0.75rem', 600, 1.4, '0.02em'),
    medium: getTypographyVariants('0.875rem', 600, 1.5, '0.02em'),
    large: getTypographyVariants('1rem', 600, 1.6, '0.01em'),
  },

  // Label Variants
  label: {
    small: getTypographyVariants('0.75rem', 400, 1.4, '0.02em'),
    medium: getTypographyVariants('0.875rem', 400, 1.5, '0.02em'),
    large: getTypographyVariants('1rem', 400, 1.6, '0.01em'),
  },

  // Placeholder Variants
  placeholder: {
    small: getTypographyVariants('0.75rem', 300, 1.4, '0.01em'),
    medium: getTypographyVariants('0.875rem', 300, 1.5, '0.01em'),
    large: getTypographyVariants('1rem', 300, 1.6, '0.005em'),
  },
};
