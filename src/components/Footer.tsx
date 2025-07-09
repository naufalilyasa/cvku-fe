function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-green-500">CV</span>
                <span className="text-blue-500">KU</span>
              </div>
              <p className="text-gray-400">
                Platform terpercaya untuk membuat CV profesional yang membantu
                Anda mendapatkan pekerjaan impian.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Template CV
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cover Letter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Tips Karir
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Dukungan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Bantuan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CVKU. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
