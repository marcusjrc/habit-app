import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../config/axios-client";

export const useGenerateHabit = () => useMutation(({habit}) => apiClient.post('/api/generate-habit/', {habit}));