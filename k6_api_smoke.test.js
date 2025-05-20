import http from 'k6/http';
import { check, group, sleep } from 'k6';

export let options = {
    vus: 10,
    duration: '10s',
};

const BASE_URL = 'http://localhost:3000';

export default function () {
    group('API Route Smoke Tests', function () {
        // Auth
        let res = http.get(`${BASE_URL}/auth`);
        check(res, { 'auth route status 200/302/401': (r) => [200,302,401].includes(r.status) });
        
        // Search
        res = http.get(`${BASE_URL}/search?q=test`);
        check(res, { 'search route status 200': (r) => r.status === 200 });

        // Quiz
        res = http.get(`${BASE_URL}/quiz`);
        check(res, { 'quiz route status 200': (r) => r.status === 200 });

        // Friends
        res = http.get(`${BASE_URL}/friends`);
        check(res, { 'friends route status 200/401': (r) => [200,401].includes(r.status) });

        // Add more fun routes!
        res = http.get(`${BASE_URL}/explore`);
        check(res, { 'explore route status 200': (r) => r.status === 200 });

        res = http.get(`${BASE_URL}/library`);
        check(res, { 'library route status 200': (r) => r.status === 200 });

        res = http.get(`${BASE_URL}/profile`);
        check(res, { 'profile route status 200/401': (r) => [200,401].includes(r.status) });

        res = http.get(`${BASE_URL}/rate`);
        check(res, { 'rate route status 200': (r) => r.status === 200 });

        res = http.get(`${BASE_URL}/recent`);
        check(res, { 'recent route status 200': (r) => r.status === 200 });

        res = http.get(`${BASE_URL}/history`);
        check(res, { 'history route status 200': (r) => r.status === 200 });

        res = http.get(`${BASE_URL}/inviteUsers`);
        check(res, { 'inviteUsers route status 200/401': (r) => [200,401].includes(r.status) });

        res = http.get(`${BASE_URL}/quizResults`);
        check(res, { 'quizResults route status 200': (r) => r.status === 200 });

        res = http.get(`${BASE_URL}/createQuiz`);
        check(res, { 'createQuiz route status 200/401': (r) => [200,401].includes(r.status) });

        sleep(1);
    });
}
