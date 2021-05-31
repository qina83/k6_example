include .env
export

#getting-start ---------------------------

#chiamata singola
http-request:
	/opt/homebrew/bin/k6 run getting-started/1_http-request.js

#chiamata singola con errore
http-request-error:
	/opt/homebrew/bin/k6 run getting-started/2_http-request-error.js

#iterazioni per un tempo stabilito
http-request-duration:
	/opt/homebrew/bin/k6 run --duration 10s getting-started/1_http-request.js

#iterazioni per un tempo stabilito con più VU
http-request-vu-duration:
	/opt/homebrew/bin/k6 run --vus 5 --duration 10s getting-started/1_http-request.js

#iterazioni per un numero stabilito con più VU
http-request-vu-iteration:
	/opt/homebrew/bin/k6 run --vus 5 --iterations 10 getting-started/1_http-request.js


#iterazioni con opzioni
http-request-options:
	/opt/homebrew/bin/k6 run getting-started/3_http-request-options.js

#lifecyle
http-request-lifecycle:
	/opt/homebrew/bin/k6 run getting-started/4_http-request-lifecycle.js

#lifecycle - vus - iteartion - env
http-request-complete:
	/opt/homebrew/bin/k6 run getting-started/5_http-request-complete.js --include-system-env-vars
	
#iterazioni con opzioni
http-request-options-stage:
	/opt/homebrew/bin/k6 run getting-started/6_http-request-options-stage.js




#------------------------------------------






# custom metrics --------------------------

#trend
http-request-trend:
	/opt/homebrew/bin/k6 run custom-metrics/1_http-request-trend.js

#trend-multi-vu
http-request-trend-multi-vu:
	/opt/homebrew/bin/k6 run custom-metrics/2_http-request-trend-multi-vu.js

#trend-multi-vu-check
http-request-trend-check:
	/opt/homebrew/bin/k6 run custom-metrics/3_http-request-trend-check.js

#trend-multi-vu-threshold
http-request-trend-threshold:
	/opt/homebrew/bin/k6 run custom-metrics/4_http-request-trend-threshold.js

#------------------------------------------



# scenarios --------------------------

#scenario
scenario:
	/opt/homebrew/bin/k6 run scenarios/1_scenario.js

scenario-exec:
	/opt/homebrew/bin/k6 run scenarios/2_scenario-exec.js

scenario-exec-csv:
	/opt/homebrew/bin/k6 run --out csv=result.csv scenarios/2_scenario-exec.js

scenario-exec-json:
	/opt/homebrew/bin/k6 run --out json=result.json scenarios/2_scenario-exec.js

scenario-exec-threshold:
	/opt/homebrew/bin/k6 run scenarios/3_scenario-exec-threshold.js

scenario-exec-html:
	/opt/homebrew/bin/k6 run scenarios/4_scenario-exec-html-threshold.js


#------------------------------------------


# ws --------------------------

ws-test:
	/opt/homebrew/bin/k6 run ws/1_ws.js

#------------------------------------------