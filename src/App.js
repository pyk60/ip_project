import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyPage from './pages/MyPage';
import Detail from './pages/Detail';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import EditProfile from "./pages/EditProfile";
import ActorFilmography from "./pages/ActorFilmography";
import Community from './pages/Community';

function App() {
    // 프로필 정보를 상태로 관리
    const [profile, setProfile] = useState({
        name: "닉네임",
        email: "oooooo@gmail.com",
        profilePic: "https://via.placeholder.com/100",
        following: 53,
        follower: 53,
    });

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                {/* MyPage와 EditProfile에 profile과 setProfile을 전달 */}
                <Route 
                    path="/mypage" 
                    element={<MyPage profile={profile} />} 
                />
                <Route
                  path="/edit-profile"
                  element={<EditProfile profile={profile} setProfile={setProfile} />}
                />
                <Route 
                    path="/community" 
                    element={<Community profile={profile} />} 
                />

                <Route path="/drama/:name" element={<Detail />} />
                <Route path="/actor/:id" element={<ActorFilmography />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
