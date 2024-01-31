import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

function SimilarExercises({ equipmentExercises, targetMuscleExercises }) {
  console.log(targetMuscleExercises);

  return (
    <Box sx={{ mt: { lg: "100px", xs: "80px" } }} p="20px">
      <Typography variant="h4" mb={5}>
        Exercises that target the same muscle group
      </Typography>

      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h4" mb="33px">
        Exercises that the same group muscle groups works on
      </Typography>

      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
}

export default SimilarExercises;
