;; answer.wat
(module
  ;; Definiert unsere Methode und welche wir dann für JavaScript eportieren
  (func $the_answer(result i32)
    (i32.const 42)
  )
  (export "get_answer" (func $the_answer))
)