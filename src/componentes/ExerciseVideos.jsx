import { Box, Stack, Typography } from "@mui/material";



function ExerciseVideos({ exerciseVideos, name }) {
  
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>

      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            target="_blank"
            href={`https://www.youtube.com/watch?v=${item?.id?.videoId}`}
            key={index}
            className="exercise-video"
            rel="noreferrer"
          >
            <img
              src={item?.snippet?.thumbnails.high.url}
              alt={item?.snippet?.title}
            />

            <Box>
              <Typography variant="h5" color="#000">
                {item.snippet.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.snippet.channelTitle}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
