import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'

import { Character } from '../../../../types/api'
import { CHARACTER_PROPERTIES } from '../../constants'

export function PropertiesTable({ data }: { data: Character }) {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {CHARACTER_PROPERTIES.map((property) => (
            <TableRow key={property.dataKey}>
              <TableCell component="th" scope="row">
                <Typography color="InfoText">{property.label}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="InfoText">
                  {property.format
                    ? property.format(data[property.dataKey])
                    : data[property.dataKey]}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
