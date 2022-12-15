import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function OrderForm({handleOpen}) {
    return (
        <Grid xs={4} sx={{
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            padding: "2rem",
            borderRadius: ".5rem",
        }}>
            <Grid item xs={12} >
                <Typography variant="h6" gutterBottom>
                    Shipping address
                </Typography>
                <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Address line"
                    fullWidth
                    autoComplete="shipping address-line"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="shipping country"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sx={{
                margin: "1rem 0"
            }}>
            </Grid>
            <div style={{ textAlign: "end", width: "100%", margin: "0 3rem 0 0" }}>
                <Button variant="contained" onClick={handleOpen}>Нарачај</Button>
            </div>
        </Grid>
    );
}
