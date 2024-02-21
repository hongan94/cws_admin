import React from "react";

function Search() {
  return (
    <div className="row show-grid">
      <div className="col-md-12">
        <div className="form-inline">
          <form>
            <div className="form-group">
              <input type="text" name="key_word" id="key_word" placeholder="Email / Tên / SĐT" className="form-control inblock half find_by_key" style={{ width: '250px' }} />
            </div>
            <div className="form-group">
              <select name="admin_type" id="admin_type" className="form-control report drop_group"><option value="">Loại quản trị viên</option><option value="0">Company</option>
                <option value="1">Store</option></select>
            </div>

            <button name="button" type="submit" className="btn btn-info">
              Tìm kiếm
              <i className="fa fa-search"></i>
            </button>      
          </form>
        </div>
        <div className="step-action" style={{ padding: '0px' }}>
        </div>
      </div>
    </div>
  )
}

export default Search;