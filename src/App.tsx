import SharedLayout from './components/SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import Step1Page from './pages/Step1Page';
import Step2Page from './pages/Step2Page';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <SharedLayout>
                <Routes>
                    <Route path="/" element={<Step1Page />} />
                    <Route path="/step-2" element={<Step2Page />} />
                </Routes>
            </SharedLayout>
        </div>
    );
}

export default App;
