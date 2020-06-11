-- Database :
-- 4. Buatlah contoh design struktur table untuk master BUKU, PENULIS dan KATEGORI
-- 5. Buatlah contoh query untuk menampilkan data semua buku berdasarkan nama penulis
-- 6. Buatlah contoh query untuk menampilkan data buku dan nama penulis berdasarkan kategori

4. -- File 4. DB Schema.jpeg

5.
SELECT *
FROM books
  LEFT JOIN authors ON books.author_id = authors.id
WHERE authors.name = 'nafies' 

6.
SELECT b.title,
  a.name
FROM books b
  LEFT JOIN authors a ON b.author_id = a.id
  LEFT JOIN categories c ON b.category_id = c.id
WHERE c.name = 'comic'
