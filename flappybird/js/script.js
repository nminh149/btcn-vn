$(function () {
    var container = $('#container');
    var bird = $('#bird');
    var pole = $('.pole');
    var pole_1 = $('#pole_1');
    var pole_2 = $('#pole_2');
    var score = $('#score');
    var level_display = $('#level');
    var high_score_key = 'flappybird_high_score';
    var container_width = parseInt(container.width(), 10);
    var container_height = parseInt(container.height(), 10);
    var pole_initial_position = parseInt(pole.css('right'), 10);
    var bird_left = parseInt(bird.css('left'), 10);
    var bird_height = parseInt(bird.height(), 10);
    var speed = 10;
    var level = 1;
    var game_timer = null;
    // Vận tốc tính bằng pixel/giây để nhịp bay không đổi theo interval của level.
    var bird_velocity = 0;
    var gravity = 1200;
    var flap_velocity = -420;
    var max_fall_velocity = 520;
    var score_updated = false;
    var game_running = false;
    var game_over = false;

    function randomizePoleHeights() {
        // Giữ khe ống rộng khoảng 43% chiều cao màn chơi, kể cả trên màn hình thấp.
        var gap = Math.round(container_height * 0.43);
        var total_pole_height = container_height - gap;
        var min_height = Math.min(100, Math.floor(total_pole_height / 2));
        var max_top_height = total_pole_height - min_height;
        var top_height = min_height + Math.floor(Math.random() * (max_top_height - min_height + 1));
        pole_1.css('height', top_height);
        pole_2.css('height', total_pole_height - top_height);
    }

    randomizePoleHeights();

    function intervalForLevel() { return [40, 30, 25, 20][level - 1]; }

    function playGame() {
        if (game_running || game_over) return;
        game_running = true;
        game_timer = setInterval(function () {
            var bird_top = parseInt(bird.css('top'), 10);
            if (collision(bird, pole_1) || collision(bird, pole_2) || bird_top <= 0 || bird_top > container_height - bird_height) {
                stopGame(false);
                return;
            }
            var pole_position = parseInt(pole.css('right'), 10);
            if (pole_position > container_width - bird_left && !score_updated) {
                var points = parseInt(score.text(), 10) + 1;
                score.text(points);
                score_updated = true;
                if (points >= 50) { stopGame(true); return; }
                var new_level = points >= 40 ? 4 : points >= 20 ? 3 : points >= 5 ? 2 : 1;
                if (new_level !== level) {
                    level = new_level;
                    level_display.text('Level: ' + level);
                    showLevelNotice(level);
                    clearInterval(game_timer);
                    game_timer = null;
                    game_running = false;
                    playGame();
                    return;
                }
            }
            if (pole_position > container_width) {
                // Giữ khoảng cách ống ổn định, chỉ thay đổi vị trí khe giữa hai ống.
                randomizePoleHeights();
                score_updated = false;
                pole_position = pole_initial_position;
            }
            pole.css('right', pole_position + speed);
            updateBird(intervalForLevel() / 1000);
        }, intervalForLevel());
    }

    function updateBird(deltaSeconds) {
        // Tích phân vận tốc theo thời gian để vật lý giống nhau ở mọi level.
        bird_velocity = Math.min(bird_velocity + gravity * deltaSeconds, max_fall_velocity);
        var top = parseFloat(bird.css('top')) + bird_velocity * deltaSeconds;
        bird.css('top', top);
        var angle = Math.max(-30, Math.min(75, bird_velocity * 0.12));
        bird.css('transform', 'rotate(' + angle + 'deg)');
    }

    function showLevelNotice(current_level) {
        var notice = $('#level_notice');
        notice.removeClass('show').text('LEVEL UP!');
        // Reflow restarts the entrance animation whenever the level changes.
        notice[0].offsetWidth;
        notice.addClass('show');
        level_display.removeClass('level-1 level-2 level-3 level-4').addClass('level-' + current_level + ' level-up');
        setTimeout(function () { level_display.removeClass('level-up'); }, 650);
    }

    $(document).on('keydown', function (e) {
        if (e.key === 'ArrowDown' || e.which === 40) {
            e.preventDefault();
            if (!game_running && !game_over) {
                playGame();
                $('#play_btn').hide();
            }
            // Chỉ nhận một cú vỗ cánh cho mỗi lần nhấn, tránh lặp khi giữ phím.
            if (!e.repeat && game_running) {
                bird_velocity = flap_velocity;
            }
        }
    }).on('keyup', function (e) {
        if (e.key === 'ArrowDown' || e.which === 40) {
            e.preventDefault();
        }
    });

    $('#play_btn').on('click', function () { playGame(); $(this).hide(); });

    function stopGame(won) {
        if (game_over) return;
        clearInterval(game_timer);
        game_timer = null;
        bird_velocity = 0;
        game_running = false;
        game_over = true;
        var current_score = parseInt(score.text(), 10) || 0;
        var high_score = 0;
        try {
            high_score = parseInt(localStorage.getItem(high_score_key), 10) || 0;
            if (current_score > high_score) {
                high_score = current_score;
                localStorage.setItem(high_score_key, high_score);
            }
        } catch (error) {
            // Continue to show the current score if browser storage is unavailable.
        }
        $('#end_title').text(won ? 'Chiến thắng!' : 'Game Over');
        $('#final_score').text('Điểm: ' + current_score);
        $('#high_score').text('Kỷ lục: ' + high_score);
        $('#end_panel').prop('hidden', false);
    }

    $('#restart_btn').on('click', function () { location.reload(); });

    function collision($div1, $div2) {
        var a = $div1.offset(), b = $div2.offset();
        return !(a.top + $div1.outerHeight(true) < b.top || a.top > b.top + $div2.outerHeight(true) ||
            a.left + $div1.outerWidth(true) < b.left || a.left > b.left + $div2.outerWidth(true));
    }
});
