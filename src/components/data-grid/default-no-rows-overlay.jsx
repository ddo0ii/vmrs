import React from 'react'
import { GridOverlay } from '@mui/x-data-grid'

export const DefaultNoRowsOverlay = ({ message = '검색결과가 없습니다.' }) => (
  <GridOverlay>{message}</GridOverlay>
)
