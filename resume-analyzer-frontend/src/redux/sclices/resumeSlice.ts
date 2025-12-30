import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResumeAnalysis{
    ats_score: number;
    overall_score: number;
    skills: string[];
    strengths: string[];
    weaknesses: string[];
    suggestions: string[];
    recommended_skills?: string[];
    section_scores: {
        [key: string]: number;
    };
}

interface ApiResponse {
    success: boolean;
    data: ResumeAnalysis;
}

interface ResumeState{
    data: ResumeAnalysis | null;
    loading: boolean;
    error: string | null;
}

const initialState : ResumeState = {
    data: null,
    loading: false,
    error: null
}   

const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers:{
        startAnalysis(state){
            state.loading = true;
            state.error = null;
            state.data = null;
        },
        analysisSuccess(state, action: PayloadAction<ResumeAnalysis | ApiResponse>){
            // Handle both nested and flat response structures
            const payload = action.payload as any;
            const analysisData = payload.data ? payload.data : payload;
            state.data = analysisData;
            state.loading = false;
        },
        analysisFailure(state, action: PayloadAction<string>){
            state.loading = false;
            state.error = action.payload;
        },
        clearAnalysis(state){
            state.data = null;
            state.error = null;
            state.loading = false;
        }
    }
})

export const { startAnalysis, analysisSuccess, analysisFailure, clearAnalysis } = resumeSlice.actions;

export default resumeSlice.reducer;