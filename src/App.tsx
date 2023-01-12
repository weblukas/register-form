import SharedLayout from './components/SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import Step1Page from './pages/Step1Page';
import Step3Page from './pages/Step3Page';
import Step2Page from './pages/Step2Page';
import style from './App.module.scss';
import Step4Page from './pages/Step4Page';
import Step5Page from './pages/Step5Page';

function App() {
    return (
        <div className={style.App}>
            <SharedLayout>
                <Routes>
                    <Route path="/" element={<Step1Page />} />
                    <Route path="/step-2" element={<Step2Page />} />
                    <Route path="/step-3" element={<Step3Page />} />
                    <Route path="/step-4" element={<Step4Page />} />
                    <Route path="/step-5" element={<Step5Page />} />
                </Routes>
            </SharedLayout>
        </div>
    );
}

export default App;
