import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases, active } = data

  const getValue = (value) => (value >= 0) ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3} className="padding10-important">
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3} className="padding10-important">
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={3} className="padding10-important">
        <Card value={getValue(todayCases)} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={3} className="padding10-important">
        <Card value={getValue(deaths)} label="Total de mortos" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={3} className="padding10-important">
        <Card value={getValue(recovered)} label="Recuperados" color="#67C887" />
      </Grid>
      <Grid item xs={12} md={3} className="padding10-important">
        <Card value={getValue(active)} label="Casos Ativos" color="#2BDC29" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)