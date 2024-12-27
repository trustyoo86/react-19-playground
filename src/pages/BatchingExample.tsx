import { useState } from 'react';
import { Box, Button, Typography, Stack, Paper } from '@mui/material';

function BatchingExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  // This will demonstrate automatic batching in React 19
  const handleAutomaticBatching = () => {
    // These state updates will be batched automatically
    setCount1(c => c + 1);
    setCount2(c => c + 1);
    setRenderCount(c => c + 1);
  };

  // This will demonstrate batching in async operations
  const handleAsyncBatching = async () => {
    await Promise.resolve();
    // In React 19, these updates will be batched even in async operations
    setCount1(c => c + 1);
    setCount2(c => c + 1);
    setRenderCount(c => c + 1);
  };

  // This will demonstrate batching in timeouts
  const handleTimeoutBatching = () => {
    setTimeout(() => {
      // In React 19, these updates will be batched in timeouts
      setCount1(c => c + 1);
      setCount2(c => c + 1);
      setRenderCount(c => c + 1);
    }, 100);
  };

  console.log('Component rendered!'); // To track renders

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        React 19 Batching Example
      </Typography>

      <Stack spacing={4}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Counters
          </Typography>
          <Typography>Count 1: {count1}</Typography>
          <Typography>Count 2: {count2}</Typography>
          <Typography color="primary">
            Number of renders: {renderCount}
          </Typography>
        </Paper>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            onClick={handleAutomaticBatching}
          >
            Synchronous Updates
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={handleAsyncBatching}
          >
            Async Updates
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={handleTimeoutBatching}
          >
            Timeout Updates
          </Button>
        </Stack>

        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            How it works
          </Typography>
          <Typography paragraph>
            1. Synchronous Updates: React 19 automatically batches multiple state updates into a single render.
          </Typography>
          <Typography paragraph>
            2. Async Updates: Even in Promise callbacks, React 19 batches state updates.
          </Typography>
          <Typography>
            3. Timeout Updates: State updates in timeouts are also automatically batched.
          </Typography>
        </Paper>
      </Stack>
    </Box>
  );
}

export default BatchingExample;
