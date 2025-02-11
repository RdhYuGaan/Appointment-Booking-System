import React, { useEffect, useState } from "react";
import { getSlots } from "../api/api";
import { Button, Card, CardContent, Typography, Grid, CircularProgress } from "@mui/material";

const SlotList = ({ onSelect }) => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await getSlots();
        setSlots(response.data);
      } catch (error) {
        console.error("Error fetching slots:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlots();
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Available Time Slots
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : slots.length === 0 ? (
        <Typography>No available slots.</Typography>
      ) : (
        <Grid container spacing={2}>
          {slots.map((slot) => (
            <Grid item xs={12} sm={6} md={4} key={slot.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{slot.date}</Typography>
                  <Typography>{slot.time}</Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => onSelect(slot)}
                    sx={{ mt: 1 }}
                  >
                    Book Slot
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default SlotList;
