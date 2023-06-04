import React, { useState } from "react";
import { Box, Button, TextField, Typography, IconButton, Grid } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setKpi } from "../../state";
import { kpiData } from "../../data/kpiData";

const FormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/home");
  };

  const [organization, setOrganization] = useState("");
  const [ccriEnvironment, setCcriEnvironment] = useState("");
  const [ccriSocial, setCcriSocial] = useState("");
  const [ccriEconomic, setCcriEconomic] = useState("");
  const [investmentValue, setInvestmentValue] = useState("");
  const [laborValue, setLaborValue] = useState("");
  const [laborHours, setLaborHours] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newKpi = {
      organization,
      ccriEnvironment: Number(ccriEnvironment),
      ccriSocial: Number(ccriSocial),
      ccriEconomic: Number(ccriEconomic),
      investmentValue: Number(investmentValue),
      laborValue: Number(laborValue),
      laborHours: Number(laborHours),
    };

    kpiData.push(newKpi);

    dispatch(setKpi(newKpi));
    resetForm();
  };

  const resetForm = () => {
    setOrganization("");
    setCcriEnvironment("");
    setCcriSocial("");
    setCcriEconomic("");
    setInvestmentValue("");
    setLaborValue("");
    setLaborHours("");
  };

  return (
    <Box p={{ xs: "1rem", md: "2rem 6%" }} textAlign="center">
      <IconButton onClick={handleGoBack}>
        <ArrowBack />
      </IconButton>
      <Typography variant="h4" gutterBottom>
        Submit Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              label="CCRI Environment"
              value={ccriEnvironment}
              onChange={(e) => setCcriEnvironment(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              label="CCRI Social"
              value={ccriSocial}
              onChange={(e) => setCcriSocial(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              label="CCRI Economic"
              value={ccriEconomic}
              onChange={(e) => setCcriEconomic(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              label="Investment Value"
              value={investmentValue}
              onChange={(e) => setInvestmentValue(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              label="Labor Value"
              value={laborValue}
              onChange={(e) => setLaborValue(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              label="Labor Hours"
              value={laborHours}
              onChange={(e) => setLaborHours(e.target.value)}
              required
              fullWidth
            />
          </Grid>
        </Grid>
        <Box mt={2} textAlign="center">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormPage;
